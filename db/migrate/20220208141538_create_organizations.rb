class CreateOrganizations < ActiveRecord::Migration[6.1]
  def change
    create_table :organizations do |t|
      t.string :name
      t.string :image_url
      t.string :vanity_url
      t.string :vanity_slug
      t.boolean :verified
      t.boolean :viewable

      t.timestamps
    end
  end
end
