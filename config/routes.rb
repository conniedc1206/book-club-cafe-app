Rails.application.routes.draw do
  resources :users, only: [:index, :show, :create, :update, :destroy]
  resources :book_clubs, only: [:index, :show]
  resources :memberships, only: [:index, :create, :destroy]
  resources :events, only: [:index, :show, :create, :destroy]
  resources :attendances, only: [:index, :create, :destroy]
  # custom routes
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "sessions#show"
  get "/myevents", to: "sessions#myevents"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
