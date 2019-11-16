class DecksController < ApplicationController

    def index
    end

    def show
    end

    def create
    end

    def delete_all
    end

    private

    def deck_params
        params.require(:deck).permit(:name, :id)
    end
end