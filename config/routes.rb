Rails.application.routes.draw do

  root 'pages#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
        resources :marvels, only: %i(index show)
    end
  end
end
