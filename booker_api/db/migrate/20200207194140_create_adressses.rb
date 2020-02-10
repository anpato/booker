class CreateAdressses < ActiveRecord::Migration[6.0]
  def change
    create_table :adressses, id: :uuid do |t|
      t.string :address_line
      t.string :zip_code
      t.string :city
      t.string :state
      t.string :cc
      t.decimal :lat,  {:precision => 10, :scale => 6}
      t.decimal :lng , {:precision => 10, :scale => 6}
      t.uuid :business_id
      t.timestamps
    end
  end
end
