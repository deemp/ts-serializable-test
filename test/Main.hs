{-# LANGUAGE ImplicitParams #-}
{-# LANGUAGE RecordWildCards #-}
{-# OPTIONS_GHC -fplugin Debug.Breakpoint #-}

-- import Converter (Config, Format (..), Token (..), Tokens, User, def, exampleNonTexTokens, exampleTexTokens, normalizeTokens, selectFromTokens, selectToTokens, showFormatExtension, showFormatName, texHaskellCodeEnd, texHaskellCodeStart, toConfigInternal)
-- import Converter.Internal (stripEmpties)
-- import Data.List.NonEmpty (NonEmpty (..))
-- import Data.String.Interpolate (i)
-- import Data.Text qualified as T
-- import Data.Text.IO qualified as T
import Hedgehog (Gen, MonadGen, MonadTest, Property, property, tripping)
import Hedgehog.Gen qualified as Gen
import Hedgehog.Range qualified as Range

-- import Lens.Micro ((^.))
-- import System.Directory (createDirectoryIfMissing)
-- import System.IO (IOMode (WriteMode), withFile)
import Test.Tasty (TestTree, defaultMain, testGroup, withResource)
import Test.Tasty.HUnit (assertEqual, testCase)
import Test.Tasty.Hedgehog (testProperty)

-- import Text.Pretty.Simple (CheckColorTty (..), OutputOptions (..), StringOutputStyle (Literal), defaultOutputOptionsDarkBg, pHPrintOpt)

-- testDir :: String
-- testDir = "testdata"

import Data.List.NonEmpty (NonEmpty)
import Data.Text qualified as T
import Hedgehog.Gen (alphaNum, choice, element, lower, nonEmpty, string, subsequence, upper)
import Hedgehog.Range
import Lib

main :: IO ()
main = print "hello"

_NAME_LENGTH_MAX = 10

genManyName :: Gen String
genManyName = string (constant 0 _NAME_LENGTH_MAX) alphaNum

genLowerCaseName :: Gen String
genLowerCaseName = (:) <$> lower <*> genManyName

genJsonName :: Gen JsonName
genJsonName = JsonName <$> ((:) <$> lower <*> genManyName)

genUpperCaseName :: Gen String
genUpperCaseName = (:) <$> upper <*> genManyName

genClassName :: Gen ClassName
genClassName = ClassName <$> genUpperCaseName

genJsonPropertyElementaryType :: (?classes :: [SomeClass]) => Gen JsonPropertyElementaryType
genJsonPropertyElementaryType = do
  cl <- element ?classes
  element [PNumber, PString, PDate, PVoid, PClass cl]

genTypeModifier :: Gen TypeModifier
genTypeModifier = element [MSingle, MList]

genFieldModifier :: Gen FieldModifier
genFieldModifier = element [MPublic, MPrivate]

genJsonPropertyCompleteType :: (?classes :: [SomeClass]) => Gen JsonPropertyCompleteType
genJsonPropertyCompleteType = do
  _jsonPropertyCompleteType_type <- genJsonPropertyElementaryType
  _jsonPropertyCompleteType_typeModifier <- genTypeModifier
  pure JsonPropertyCompleteType{..}

genJsonPropertyType :: (?classes :: [SomeClass]) => Gen JsonPropertyType
genJsonPropertyType = do
  _jsonPropertyType <- nonEmpty (constant 1 3) genJsonPropertyCompleteType
  pure JsonPropertyType{..}

genJsonProperty :: (?classes :: [SomeClass]) => Gen JsonProperty
genJsonProperty = do
  _jsonProperty <- genJsonPropertyType
  pure JsonProperty{..}

-- ---


-- TODO mutate class from type

-- TODO jsonProperty sets the type for field
-- genClassFieldValue :: (?selectedTypes :: NonEmpty JsonPropertyCompleteType) => Gen ClassFieldValue
-- genClassFieldValue = do 


-- genNonEmpty :: Gen (NonEmpty T.Text)
-- genNonEmpty = Gen.nonEmpty (Range.constant 1 5) genLine

-- defaultMain $
--   testGroup
--     "Top"
--     [ testWrite Md
--     , testWrite TeX
--     , testTripping TeX
--     , testTripping Md
--     ]

-- -- How many tokens to generate for tripping tests
-- _N_TOKENS :: Int
-- _N_TOKENS = 1000

-- -- TODO test initial haskell code indentation is the same as after parsing
-- -- so, generate lines with indentation relative to the previous indent token

-- -- TODO test no newline as the first line in fromTokens

-- -- TODO no newlines in the generated lines

-- --

-- selectDialectName :: Format -> String
-- selectDialectName = \case
--   TeX -> showFormatName TeX
--   _ -> "Non-" <> showFormatName TeX

-- testDialectWrite :: FilePath -> Tokens -> Format -> TestTree
-- testDialectWrite dir tokens format =
--   testCase [i|Write #{showFormatName format} code|] do
--     let text = selectFromTokens def format tokens
--     T.writeFile [i|#{dir}/test.#{showFormatExtension format}|] text
--     assertEqual "Roundtrip" tokens (selectToTokens def format text)

-- writeTokens :: FilePath -> Tokens -> TestTree
-- writeTokens dir tokens = testCase "Write tokens to a file" $
--   withFile [i|#{dir}/tokens.hs|] WriteMode $
--     \h ->
--       pHPrintOpt
--         CheckColorTty
--         ( defaultOutputOptionsDarkBg
--             { outputOptionsStringStyle = Literal
--             }
--         )
--         h
--         tokens

-- testFormatsWrite :: FilePath -> [Format] -> Tokens -> [TestTree]
-- testFormatsWrite dir formats tokens =
--   (testDialectWrite dir tokens <$> formats) <> [writeTokens dir tokens]

-- selectTokens :: Format -> Tokens
-- selectTokens = \case
--   TeX -> exampleTexTokens
--   _ -> exampleNonTexTokens

-- selectFormats :: Format -> [Format]
-- selectFormats = \case
--   TeX -> [Hs, Md, Lhs, TeX]
--   _ -> [Hs, Lhs, Md]

-- testWrite :: Format -> TestTree
-- testWrite format =
--   let dir = [i|#{testDir}/#{showFormatExtension format}|]
--    in withResource (createDirectoryIfMissing True dir) pure $
--         const $
--           testGroup [i|Using #{selectDialectName format} tokens|] $
--             (testFormatsWrite dir (selectFormats format) (selectTokens format))

-- alphabet :: MonadGen m => m Char
-- alphabet = Gen.alphaNum

-- genNonEmpty :: Gen (NonEmpty T.Text)
-- genNonEmpty = Gen.nonEmpty (Range.constant 1 5) genLine

-- genLine :: Gen T.Text
-- genLine = do
--   indent <- Gen.text (Range.constant 0 5) (pure ' ')
--   content <- Gen.text (Range.constant 1 5) alphabet
--   pure $ indent <> content

-- genLines :: Gen [T.Text]
-- genLines = Gen.list (Range.constant 1 5) genLine

-- -- Tokens

-- genIndent :: Gen Token
-- genIndent = do
--   n <- Gen.int (Range.constant 0 10)
--   pure Indent{..}

-- genDedent :: Gen Token
-- genDedent = pure Dedent

-- genComment :: Gen Token
-- genComment = do
--   someLines <- genNonEmpty
--   pure $ Comment{someLines}

-- genText :: Gen Token
-- genText = do
--   someLines <- genNonEmpty
--   pure Text{..}

-- genCommentSingleLine :: Gen Token
-- genCommentSingleLine = do
--   someLine <- genLine
--   pure CommentSingleLine{..}

-- genNonDisabled :: (?genCode :: GenCode) => Gen Tokens
-- genNonDisabled =
--   Gen.choice $
--     [?genCode] <> (((: []) <$>) <$> [genComment, genCommentSingleLine, genText, genIndent, genDedent])

-- genDisabled :: Env => Gen Token
-- genDisabled = do
--   tokens <- genNonDisabled
--   let manyLines = reverse $ T.lines $ selectFromTokens ?config ?format tokens
--   pure $ Disabled{manyLines}

-- genTokensSublist :: Env => Gen Tokens
-- genTokensSublist =
--   Gen.choice $ [genNonDisabled, (: []) <$> genDisabled]

-- genTokens :: Env => Gen Tokens
-- genTokens = do
--   subLists <- Gen.list (Range.singleton _N_TOKENS) genTokensSublist
--   pure $ normalizeTokens $ concat subLists

-- -- Code tokens from tex files can only be recognized in a specific sequence
-- -- That's why, they're generated in a list
-- texGenCode :: (?config :: Config User) => Gen [Token]
-- texGenCode = do
--   let config = toConfigInternal ?config
--   manyLines <- genLines
--   let manyLines' = if null (stripEmpties manyLines) then ["a"] else manyLines
--   pure $
--     [ Text{someLines = config ^. texHaskellCodeStart :| []}
--     , HaskellCode{manyLines = manyLines'}
--     , Text{someLines = config ^. texHaskellCodeEnd :| []}
--     ]

-- -- Code tokens from tex files can only be recognized in a specific sequence
-- -- That's why, they're generated in a list
-- nonTexGenCode :: Gen [Token]
-- nonTexGenCode = do
--   manyLines <- genLines
--   let manyLines' = if null (stripEmpties manyLines) then ["a"] else manyLines
--   pure [HaskellCode{manyLines = manyLines'}]

-- -- Tripping
-- trippingTokens :: (MonadTest m, ?config :: Config User, ?format :: Format) => Tokens -> m ()
-- trippingTokens tokens =
--   tripping tokens (selectFromTokens ?config ?format) (Just . selectToTokens ?config ?format)

-- testTrippingTokens :: Env => Property
-- testTrippingTokens = property do
--   tokens <- Gen.sample $ genTokens
--   -- breakpointM
--   trippingTokens tokens

-- type GenCode = Gen [Token]

-- type Env = (?config :: Config User, ?format :: Format, ?genCode :: GenCode)

-- selectGenCode :: Format -> ((?config :: Config User) => GenCode)
-- selectGenCode = \case
--   TeX -> texGenCode
--   _ -> nonTexGenCode

-- testTripping :: Format -> TestTree
-- testTripping format =
--   let ?config = def; ?format = format
--    in let ?genCode = selectGenCode format
--        in testProperty [i|Roundtrip #{selectDialectName format} tokens for all formats|] $ testTrippingTokens