module Api::V1
    class CardsController < ApplicationController
        before_action :set_card, only: [:show, :update, :destroy]

        # GET /cards
        def index
            @cards = Card.order(:multiverseid)
            render json: @cards
        end

        # GET /cards/1
        def show
            render json: @card
        end

        # POST /cards
        def create
            @card = Card.create(card_params)
            if @card.save
                render json: @card, status: :created
            else
                render json: @card.errors, status: :unprocessable_entity
            end
        end

        # DELETE /cards/1
        def destroy
            @card.destroy
            if @card.destroy
                head :no_content, status: :ok
            else
                render json: @card.errors, status: :unprocessable_entity
            end
        end

        #DELETE /cards
        def delete_all
            Card.delete_all
            @card = Card.new
            render json: @card
        end

        private

        # Callback for common setup
        def card_list
            @card = Card.find(params[:id])
        end

        # SOP white list
        def card_params
            params.require(:card).permit(:name, :multiverseid, :url, :deck_id)
        end
    end
end