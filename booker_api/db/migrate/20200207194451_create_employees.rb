class CreateEmployees < ActiveRecord::Migration[6.0]
  def change
    create_table :employees, id: :uuid do |t|
      t.uuid :business_id
      t.timestamps
    end
  end
end
