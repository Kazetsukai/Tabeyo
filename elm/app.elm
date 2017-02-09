import Html exposing (..)
import Html.Events exposing (onClick)


main =
    Html.beginnerProgram { model = { count = 0 }, update = update, view = view }


type alias Model = { count : Int }





type Msg = Reset | Increment


update : Msg -> Model -> Model
update msg model =
    case msg of
        Reset -> { model | count = 0 }
        Increment -> { model | count = (.count model) + 1 }






view : Model -> Html Msg
view model =
    div []
        [ button [ onClick Increment ] [ text "whoa" ]
        , div [] [ text (toString (.count model)) ]
        ]