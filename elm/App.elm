import Html exposing (..)
import Html.Events exposing (onClick)
import Routing exposing (Route(..), parseLocation)
import Navigation exposing (Location)



main =
    Navigation.program OnLocationChange 
    { init = init
    , update = update
    , view = view
    , subscriptions = (\_ -> Sub.none)
    }



--- MODEL

type alias Model = { count : Int, route : Routing.Route }

init : Navigation.Location -> ( Model, Cmd Msg )
init location =
  ( { count = 0, route = CoolRoute }
  , Cmd.none
  )




type Msg = 
    Reset 
    | Increment 
    | NewUrl String
    | OnLocationChange Location


update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
    case msg of
        Reset -> ({ model | count = 0 }, Cmd.none)
        Increment -> ({ model | count = model.count + 1 }, Cmd.none)
        NewUrl url -> (model, Navigation.newUrl url)
        OnLocationChange location ->
            let
                newRoute =
                    parseLocation location
            in
                ( { model | route = newRoute }, Cmd.none)





view : Model -> Html Msg
view model =
    div []
        [ button [ onClick (NewUrl "/cool/")] [ text "Cool!" ]
        , button [ onClick (NewUrl "/derp/")] [ text "Derp!" ]
        , page model ]

page : Model -> Html Msg
page model =
    case model.route of
        CoolRoute ->
            div []
                [ button [ onClick Increment ] [ text "whoa" ]
                , button [ onClick Reset ] [ text "GUMPF" ]
                , div [] [ text (toString (.count model)) ]
                ]

        DerpRoute ->
            div []
                [
                    text "derp!"
                ]

        NotFoundRoute ->
            div []
                [ text "not found" ]