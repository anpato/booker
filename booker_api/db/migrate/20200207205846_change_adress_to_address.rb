class ChangeAdressToAddress < ActiveRecord::Migration[6.0]
  def change
    rename_table :adressses, :addresses
  end
end
