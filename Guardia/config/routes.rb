Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  resources :articles
  get 'application/index'
  root 'application#index'
end
