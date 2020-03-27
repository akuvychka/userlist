Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  scope '/api/' do
    scope module: :api do
      resources :users, only: [:index] do
        collection do
          get :me
        end
      end
    end
  end
end
