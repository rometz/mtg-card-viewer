module Api::V1
    class DecksController < ApplicationController

        def index
            @decks = Deck.all
            render json: @decks
        end

        def show
            @deck = Deck.find(params[:id])
            render json: @deck
        end

        def create
            @deck = Deck.create(
                name: params["name"]
            )
            render json: @deck
        end

        def delete
            Deck.delete(params[:id])
        end

        private

        def deck_params
            params.require(:deck).permit(:name, :id)
        end
    end
end