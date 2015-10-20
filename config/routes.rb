Rails.application.routes.draw do
  resource :session, only: [:new, :create, :show, :destroy]
  resources :users, only: [:new, :create, :show]
  resources :users, defaults: {format: :json}, only: [:index]
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :messages, only: [:create, :index]
    resources :events, only: [:create, :index, :show]
    resources :pictures, only: [:create, :index, :show]
    resources :comments, only: [:create, :index, :show]
  end

  get '*unmatched_route', to: 'application#not_found'
end
