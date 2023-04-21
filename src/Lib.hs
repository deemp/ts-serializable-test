{-# LANGUAGE GeneralisedNewtypeDeriving #-}
{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE InstanceSigs #-}
{-# LANGUAGE LambdaCase #-}
{-# LANGUAGE QuasiQuotes #-}
{-# LANGUAGE RecordWildCards #-}

module Lib where

import Data.List (intercalate)
import Data.List.NonEmpty as NE (NonEmpty (..), toList)
import Data.String.Interpolate (i, __i'L)
import Data.Time (UTCTime)

someFunc :: IO ()
someFunc = print "hello"

-- -----
-- @jsonName("very::strange::json:name")
--
newtype JsonName = JsonName {_jsonName :: String} deriving (Eq, Ord)
instance Show JsonName where
  show :: JsonName -> String
  show JsonName{..} = [i|@jsonName("#{_jsonName}")|]

ex2 :: JsonName
ex2 = JsonName "very::strange::json:name"

-- >>> ex2
-- @jsonName("very::strange::json:name")
--

-- -----
--  @jsonProperty([OtherClassConstructor], null)
--

newtype ClassName = ClassName
  { _className :: String
  } deriving (Eq, Ord)

instance Show ClassName where
  show :: ClassName -> String
  show ClassName{..} = _className

data JsonPropertyElementaryType
  = PNull
  | PNumber
  | PString
  | PDate
  | PVoid Int
  | PClass SomeClass
  deriving (Eq, Ord)

instance Show JsonPropertyElementaryType where
  show :: JsonPropertyElementaryType -> String
  show = \case
    PNull -> "null"
    PNumber -> "Number"
    PString -> "String"
    PDate -> "Date"
    PVoid n -> [i|void #{n}|]
    PClass SomeClass{..} -> show _someClass_name

data TypeModifier = MSingle | MList deriving (Eq, Ord)

data FieldModifier = MPublic | MPrivate deriving (Eq, Ord)

instance Show FieldModifier where
  show :: FieldModifier -> String
  show = \case
    MPublic -> "public"
    MPrivate -> "private"

data JsonPropertyCompleteType = JsonPropertyCompleteType
  { _jsonPropertyCompleteType_type :: JsonPropertyElementaryType
  , _jsonPropertyCompleteType_typeModifier :: TypeModifier
  } deriving (Eq, Ord)

instance Show JsonPropertyCompleteType where
  show :: JsonPropertyCompleteType -> String
  show (JsonPropertyCompleteType t m) =
    case m of
      MSingle -> show t
      MList -> [i|[#{t}]|]

newtype JsonPropertyType = JsonPropertyType
  { _jsonPropertyType :: NonEmpty JsonPropertyCompleteType
  } deriving (Eq, Ord)

instance Show JsonPropertyType where
  show :: JsonPropertyType -> String
  show JsonPropertyType{..} = intercalate ", " (show <$> toList _jsonPropertyType)

newtype JsonProperty = JsonProperty {_jsonProperty :: JsonPropertyType} deriving (Eq, Ord)

instance Show JsonProperty where
  show :: JsonProperty -> String
  show JsonProperty{..} = [i|@jsonProperty(#{show _jsonProperty})|]

ex1 :: JsonProperty
ex1 =
  JsonProperty
    JsonPropertyType
      { _jsonPropertyType =
          JsonPropertyCompleteType PNumber MSingle
            :| [ JsonPropertyCompleteType PString MList
               ]
      }

-- >>> ex1
-- @jsonProperty(Number, Date, [SomeClass])
--

-- -----
-- public other: OtherClassConstructor | null = null;
--

-- TODO class for default values for each constructor

data ClassFieldValue
  = VNull
  | VVoid {_jsonValue_void :: Int}
  | VNumber {_jsonValue_number :: Int}
  | VString {_jsonValue_string :: String}
  | VDate {_jsonValue_date :: Maybe UTCTime}
  | -- don't need constructor parameters as all fields
    -- have default values
    VClass {_jsonValue_className :: SomeClass}
  deriving (Eq, Ord)

instance Show ClassFieldValue where
  show :: ClassFieldValue -> String
  show = \case
    VNull -> "null"
    VVoid n -> [i|void #{n}|]
    VNumber n -> show n
    VString s -> show s
    VDate d ->
      let d' = maybe "" (\x -> [i|"#{x}"|]) d
       in [i|new Date(#{d'})|]
    VClass SomeClass{..} -> [i|new #{_someClass_name}()|]

newtype ClassFieldName = ClassFieldName {_classFieldName :: String} deriving (Eq, Ord)

instance Show ClassFieldName where
  show :: ClassFieldName -> String
  show ClassFieldName{..} = _classFieldName

data ClassFieldElementaryType
  = TNull
  | TVoid Int
  | TNumber
  | TString
  | TDate
  | TClass SomeClass
  deriving (Eq, Ord)

instance Show ClassFieldElementaryType where
  show :: ClassFieldElementaryType -> String
  show = \case
    TNumber -> "number"
    TNull -> "null"
    TVoid n -> [i|void #{n}|]
    TString -> "string"
    TDate -> "Date"
    TClass (SomeClass{..}) -> show _someClass_name

data ClassFieldCompleteType = ClassFieldCompleteType
  { _classFieldCompleteType_type :: ClassFieldElementaryType
  , _classFieldCompleteType_modifier :: TypeModifier
  } deriving (Eq, Ord)

instance Show ClassFieldCompleteType where
  show :: ClassFieldCompleteType -> String
  show (ClassFieldCompleteType t m) =
    case m of
      MSingle -> show t
      MList -> [i|[#{t}]|]

newtype ClassFieldType = ClassFieldType
  { _classFieldType :: NonEmpty ClassFieldCompleteType
  } deriving (Eq, Ord)

instance Show ClassFieldType where
  show :: ClassFieldType -> String
  show ClassFieldType{..} = intercalate " | " (show <$> toList _classFieldType)

data ClassFieldCompleteValue = ClassFieldCompleteValue
  { _classFieldCompleteValue_value :: ClassFieldValue
  , _classFieldCompleteValue_typeModifier :: TypeModifier
  } deriving (Eq, Ord)

instance Show ClassFieldCompleteValue where
  show :: ClassFieldCompleteValue -> String
  show (ClassFieldCompleteValue t m) =
    case m of
      MSingle -> show t
      MList -> [i|[#{t}]|]

data ClassField = ClassField
  { _classField_jsonName :: Maybe JsonName
  , _classField_jsonProperty :: JsonProperty
  , _classField_modifier :: FieldModifier
  , _classField_name :: ClassFieldName
  , _classField_isOptional :: Bool
  , _classField_type :: ClassFieldType
  , _classField_value :: ClassFieldCompleteValue
  } deriving (Eq, Ord)

instance Show ClassField where
  show :: ClassField -> String
  show ClassField{..} =
    [__i'L|#{maybe "" show _classField_jsonName}
    #{show _classField_jsonProperty}
    #{_classField_modifier} #{_classField_name}#{if _classField_isOptional then "?" else ""}: #{_classField_type} = #{_classField_value};|]

ex3 :: ClassField
ex3 =
  ClassField
    { _classField_jsonName = Just ex2
    , _classField_jsonProperty = ex1
    , _classField_modifier = MPublic
    , _classField_name = ClassFieldName "birthdate"
    , _classField_isOptional = True
    , _classField_type =
        ClassFieldType
          { _classFieldType =
              ClassFieldCompleteType TNumber MSingle
                :| [ ClassFieldCompleteType TString MList
                   ]
          }
    , _classField_value = ClassFieldCompleteValue (VString "some_string") MList
    }

-- >>> ex3
-- @jsonName("very::strange::json:name")
-- @jsonProperty(Number, [String])
-- public birthdate?: number | [string] = ["some_string"];

data ClassMethodType = CMString | CMNumber deriving (Eq, Ord)

instance Show ClassMethodType where
  show :: ClassMethodType -> String
  show CMString = "string"
  show CMNumber = "number"

data ClassMethod = ClassMethod
  { _classMethod_modifier :: FieldModifier
  , _classMethod_name :: String
  , _classMethod_type :: ClassMethodType
  } deriving (Eq, Ord)

instance Show ClassMethod where
  show :: ClassMethod -> String
  show ClassMethod{..} = [i|#{_classMethod_modifier} #{_classMethod_name}(): #{_classMethod_type} {return void 0;};|]

ex4 :: ClassMethod
ex4 =
  ClassMethod
    { _classMethod_modifier = MPublic
    , _classMethod_name = "other"
    , _classMethod_type = CMString
    }

-- >>> ex4
-- public other(): string {return void 0;};

data NamingStrategy = SnakeCase | KebabCase | PascalCase deriving (Show, Eq, Ord)

newtype JsonObject = JsonObject
  { _namingStrategy :: NamingStrategy
  } deriving (Eq, Ord)

instance Show JsonObject where
  show :: JsonObject -> String
  show JsonObject{..} = [i|@jsonObject({ namingStrategy: new #{_namingStrategy}NamingStrategy() })|]

-- -----
-- Class

data SomeClass = SomeClass
  { _someClass_jsonObject :: JsonObject
  , _someClass_name :: ClassName
  , _someClass_fields :: NonEmpty ClassField
  , _someClass_methods :: NonEmpty ClassMethod
  } deriving (Eq, Ord)

instance Show SomeClass where
  show :: SomeClass -> String
  show SomeClass{..} =
    [__i'L|#{show _someClass_jsonObject}
    export class #{_someClass_name} extends Serializable {
    #{show' _someClass_fields}
    #{show' _someClass_methods}
    }|]
   where
    indent = ("  " <>)
    show' x = intercalate "\n" (unlines . (indent <$>) . lines . show <$> toList x)

ex5 :: SomeClass
ex5 =
  SomeClass
    { _someClass_jsonObject = JsonObject{_namingStrategy = SnakeCase}
    , _someClass_name = ClassName "User"
    , _someClass_fields = ex3 :| []
    , _someClass_methods = ex4 :| []
    }

-- >>> ex5
-- jsonObject({ namingStrategy: new SnakeCaseNamingStrategy() })
-- export class User extends Serializable {
--   @jsonName("very::strange::json:name")
--   @jsonProperty(Number, [String])
--   public birthdate?: number | [string] = ["some_string"];
-- <BLANKLINE>
--   public other(): number {return void 0;};
-- <BLANKLINE>
-- }

ex6 :: SomeClass
ex6 =
  ex5
    { _someClass_name = ClassName "SomeUser"
    , _someClass_fields =
        ex3
          { _classField_jsonProperty =
              JsonProperty
                { _jsonProperty =
                    JsonPropertyType
                      { _jsonPropertyType =
                          JsonPropertyCompleteType
                            { _jsonPropertyCompleteType_type = PClass ex5
                            , _jsonPropertyCompleteType_typeModifier = MSingle
                            }
                            :| []
                      }
                }
          , _classField_type =
              ClassFieldType
                { _classFieldType =
                    ClassFieldCompleteType (TClass ex5) MSingle :| []
                }
          , _classField_value = ClassFieldCompleteValue (VClass ex5) MSingle
          }
          :| []
    }

-- >>> ex6
-- jsonObject({ namingStrategy: new SnakeCaseNamingStrategy() })
-- export class SomeUser extends Serializable {
--   @jsonName("very::strange::json:name")
--   @jsonProperty(User)
--   public birthdate?: User = new User();
-- <BLANKLINE>
--   public other(): number {return void 0;};
-- <BLANKLINE>
-- }
