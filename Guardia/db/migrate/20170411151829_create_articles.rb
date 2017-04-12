class CreateArticles < ActiveRecord::Migration[5.0]
  def change
    create_table :articles do |t|
      t.text :title
      t.text :content
      t.text :category
      t.date :date
      t.text :author
      t.integer :read_num
      t.integer :comment_num

      t.timestamps
    end
  end
end
