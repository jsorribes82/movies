Rails.application.routes.draw do
  get 'settings/index'

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  get 'statics/index'

  get 'statics/about'
  get '/about' => 'statics#about', :as => :about
  get '/licensing' => 'statics#licensing', :as => :licensing
	root :to => "statics#index"
  devise_for :users
  get 'peliculas/index'
  resources :settings
	# root :to => "peliculas#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
