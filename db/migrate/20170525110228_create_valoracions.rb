class CreateValoracions < ActiveRecord::Migration[5.0]
  def change
    create_table :valoracions do |t|
      t.text :comentari
      t.date :data_comentari
      t.integer :puntuacio

      t.timestamps
    end
  end
end
