# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'rest-client'
require 'digest'
require 'date'
require 'json'

# ts = DateTime.now.to_s

# message = ts + ENV['PVTKEY'].to_s + ENV['APIKEY'].to_s
# md5 = Digest::MD5.new
# a = md5 << message

# HASH = a.to_s


#   result = "http://gateway.marvel.com/v1/public/characters?ts=#{DateTime.now.to_s
#   }&apikey=#{ENV['APIKEY']}&hash=#{HASH}&limit=2&offset=2
#   "
#   data = JSON.parse(RestClient.get(result))

#   render :json => data

# save data to DB
#    JSON[data]['results'].each do |data| # [1..-1] ignores first dummy element
#         Marvel.create(
#         heroid: data['id'],
#         name: data['name'],
#         description: data['description'],
#         thumbnail: data['thumbnail'],
#     )
#   end

