class CreateMarvels < ActiveRecord::Migration[6.1]
  def change
    create_table :marvels do |t|
      t.string :name, null: false
      t.integer :heroid, null: false
      t.string :description, null: false
      
      t.timestamps
    end
  end
end
