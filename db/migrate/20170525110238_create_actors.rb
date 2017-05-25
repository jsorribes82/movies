class CreateActors < ActiveRecord::Migration[5.0]
  def change
    create_table :actors do |t|
      t.string :name
      t.date :data_naci
      t.binary :foto

      t.timestamps
    end
  end
end
