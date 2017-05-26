Rails.application.routes.draw do
  get 'statics/index'

  get 'statics/about'
  get '/about' => 'statics#about', :as => :about
	root :to => "statics#index"
  devise_for :users
  get 'peliculas/index'
	# root :to => "peliculas#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
