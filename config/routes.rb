Rails.application.routes.draw do
  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create, :show]
  root to: 'static_pages#root'
  get '*unmatched_route', to: 'application#not_found'
end
