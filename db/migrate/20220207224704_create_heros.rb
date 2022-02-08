class CreateHeros < ActiveRecord::Migration[6.1]
  def change
    create_table :heros do |t|
      t.string :recipient_email,  null: false
      t.string :first_name,       null: false
      t.string :last_name,        null: false
      t.string :badge_template_id, null: false
      t.datetime :issued_at, null: false

      t.timestamps
    end
  end
end
