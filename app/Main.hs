module Main (main) where

import qualified Test (main)

main :: IO ()
main = Test.main

{- This code will be evaluated by ghcid
-- $> putStrLn ("3" ++ "3")

-- $> putStrLn "Hello from the magic comments!"

-- $> print (23 :: Int)
-}

{- This code will be evaluated by HLS
>>> 2 + 2
4
-}