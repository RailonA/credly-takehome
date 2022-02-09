Rails.application.routes.draw do

  # root 'pages#index'
  # # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # namespace :api do
  #   namespace :v1 do
  #       resources :marvels, only: %i(index show)
  #   end
  # end
  
  resources :heroes, only: %i(index show new create edit update destroy)
  resources :organizations, only: %i(index show new create edit update destroy)
  root 'organizations#index'

end
