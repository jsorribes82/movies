class CreateTvshows < ActiveRecord::Migration[5.0]
  def change
    create_table :tvshows do |t|
      t.string :name
      t.string :principal_presentador
      t.string :pais_origen

      t.timestamps
    end
  end
end
