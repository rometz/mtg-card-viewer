class MtgapiController < ApplicationController
    require 'mtg_sdk'

    # this method handles booster pack fetching
    def fetch_booster
        # need to handle passed parameters for set name
        # hardcoding a specific set: 'ktk' for now 11/24
        @set = 'ktk'
        @booster = MTG::Set.generate_booster(@set)
        render json: @booster
    end
end