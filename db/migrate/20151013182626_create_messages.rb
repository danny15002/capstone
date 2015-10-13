class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.integer :from_id
      t.integer :to_id
      t.text :body
      t.boolean :public

      t.timestamps null: false
    end
  end
end
