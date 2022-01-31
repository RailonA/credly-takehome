class Api::V1::MarvelsController < ApplicationController
  require 'rest-client'
  require 'digest'
  require 'date'

  ts = DateTime.now.to_s

  message = ts + ENV['PVTKEY'] + ENV['APIKEY']
  md5 = Digest::MD5.new
  a = md5 << message

  HASH = a.to_s

  def index
    url = "http://gateway.marvel.com/v1/public/characters?ts=#{DateTime.now.to_s
    }&apikey=#{ENV['APIKEY']}&hash=#{HASH}&limit=1&offset=1
    "
    data = JSON.parse(RestClient.get(url))
    render json: data
  end

  def show
    
  end

end