Rails.application.routes.draw do
  resource :session, only: [:new, :create, :show, :destroy]
  resources :users, only: [:new, :create, :show]
  resources :users, defaults: {format: :json}, only: [:index]
  root to: 'static_pages#root'
  # get '*unmatched_route', to: 'application#not_found'

  namespace :api, defaults: {format: :json} do
    resources :messages, only: [:new, :create, :index]
    resources :events, only: [:new, :create, :index, :show]
  end

end
