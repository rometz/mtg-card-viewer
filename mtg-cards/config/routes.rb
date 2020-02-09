Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :decks
      resources :cards do
        delete :index, on: :collection, action: :delete_all
      end
      get 'mtgapi/fetchbooster', to: 'mtgapi#fetch_booster', as: 'fetch_booster'
      get 'mtgapi/fetchallsets', to: 'mtgapi#fetch_all_sets', as: 'fetch_sets'
      get 'mtgapi/fetchset', to: 'mtgapi#fetch_set', as: 'fetch_set'
      
      root "static#index"
    end
  end

  #get '/api/v1/mtgapi/fetchbooster', to: 'mtgapi#fetch_booster', as: 'fetch_booster'

  get '*path', to: 'static#index'
end
