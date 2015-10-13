Rails.application.routes.draw do
  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create, :show]
  resources :messages, only: :create
  root to: 'sessions#new'
  get '*unmatched_route', to: 'application#not_found'
end
