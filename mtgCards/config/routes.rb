Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  scope '/api' do
    resources :decks
    resources :cards do
      delete :index, on: :collection, action: :delete_all
    end
  end

  get '/mtgapi/fetchbooster', to: 'mtgapi#fetch_booster'
end
