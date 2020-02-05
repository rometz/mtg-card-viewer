module Api::V1
    class DecksController < ApplicationController
        before_action :set_deck, only: [:show, :update, :destroy]

        # GET /decks
        def index
            @decks = Deck.order(:id)
            render json: @decks
        end

        # GET /decks/1
        def show
            render json: @deck
        end

        # POST /decks
        def create
            @deck = Deck.create(deck_params)
            if @deck.save
                render json: @deck, status: :created
            else
                render json: @deck.errors, status: :unprocessable_entity
            end
        end

        # PATCH/PUT /decks/1
        def update
            if @deck.update(deck_params)
                render json: @deck
            else
                render json: @deck.errors, status: :unprocessable_entity
            end
        end

        #DELETE /deck
        def destroy
            @deck.destroy
            if @deck.destroy
                head :no_content, status: :ok
            else
                render json: @deck.errors, status: :unprocessable_entity
            end
        end

        private

        #Callback for commonalities
        def deck_list
            @deck = Deck.find(params[:id])
        end

        #SOP white list
        def deck_params
            params.require(:deck).permit(:name, :id)
        end
    end
end