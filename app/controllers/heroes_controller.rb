class HeroesController < ApplicationController
  def index
    @heros = Hero.all
  end

  def show
  end

  def new
    @hero = Hero.new
  end

  def edit 
  end

  def creat
    @hero = Hero.new(hero_params)

    respond_to do |format|
      if @hero.save
        format.html { redirect_to @hero, notice: 'Hero was successfully created.' }
        format.json { render :show, status: :created, location: @hero }
      else
        format.html { render :new }
        format.json { render json: @hero.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
  end

  def destroy
  end

  def deploy
  end

  private

  def set_hero
  end

  def hero_params
    params.require(:hero).permit(:recipient_email, :first_name, :last_name, :badge_template_id, :issued_at)
  end
end