module Routing exposing (..)

import Navigation exposing (Location)
import UrlParser exposing (..)


type Route
    = CoolRoute
    | DerpRoute
    | NotFoundRoute


matchers : Parser (Route -> a) a
matchers =
    oneOf
        [ map CoolRoute top
        , map CoolRoute (s "cool")
        , map DerpRoute (s "derp")
        ]


parseLocation : Location -> Route
parseLocation location =
    case (parsePath matchers location) of
        Just route ->
            route

        Nothing ->
            NotFoundRoute