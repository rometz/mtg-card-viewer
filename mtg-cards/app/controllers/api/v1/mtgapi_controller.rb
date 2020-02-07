module Api::V1
    class MtgapiController < ApplicationController
        require 'mtg_sdk'

        # this method handles booster pack fetching
        def fetch_booster
            # need to handle passed parameters for set name
            # hardcoding a specific set: 'ktk' for now 11/24
            byebug
            @set = 'ktk'
            @booster = MTG::Set.generate_booster(@set)
            console.log(@booster)
            render json: @booster
        end

        def fetch_set
            # again, hardcoded to begin with until params are handled
            # this method can be abstracted to include all set-like things...?
            @code = 'ktk'
            @set = MTG::Set.find(@code)
            render json: @set
        end

        def fetch_all_sets
            @sets = MTG::Set.all
            render json: @sets
        end
    end
end