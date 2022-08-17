Rails.application.routes.draw do
  
  resources :memberships, only: [:index, :create, :destroy]
  resources :book_clubs, only: [:index, :show]
  resources :users, only: [:index, :show, :create, :update, :destroy]

  # custom routes
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "sessions#show"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
