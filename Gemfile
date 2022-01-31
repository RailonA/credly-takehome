source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.0.1'

gem 'dotenv-rails'
gem 'rack-cors'
gem 'rails', '~> 6.1.4', '>= 6.1.4.4'
gem 'react_on_rails', '11.1.4'
gem "rest-client"
gem 'sqlite3', '~> 1.4'
gem 'puma', '~> 5.0'
gem 'sass-rails', '>= 6'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.7'
gem 'webpacker', '~> 5.0'
gem 'webpacker-react'

gem 'bootsnap', '>= 1.4.4', require: false

group :development do
  gem 'web-console', '>= 4.1.0'
  gem 'rack-mini-profiler', '~> 2.0'
  gem 'listen', '~> 3.3'
  gem 'rubocop', require: false
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  gem 'capybara', '>= 3.26'
  gem 'selenium-webdriver'
  gem 'webdrivers'
end

group :development, :test do
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
  gem "foreman"
end

group :production, :test do
  gem 'pg', '>= 0.18', '< 2.0'
end


gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]

# gem 'mini_racer', '~> 0.1.14'