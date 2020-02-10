class AddAdminColumnToEmployee < ActiveRecord::Migration[6.0]
  def change
    add_column :employees, :is_admin, :boolean 
  end
end
