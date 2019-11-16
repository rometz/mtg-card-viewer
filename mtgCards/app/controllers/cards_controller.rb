class CardsController < ApplicationController

    def index
    end

    def show
    end

    def create
    end

    def delete_all
    end

    private

    def card_params
        params.require(:card).permit(:name, :id)
    end
end