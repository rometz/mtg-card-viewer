module Api::V1
    class StaticController < ApplicationController
        def index
            @test = Card.all
            render json: @test
        end
    end
end