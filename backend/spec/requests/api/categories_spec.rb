require 'rails_helper'

RSpec.describe "Api::Categories", type: :request do
  describe "GET /api/categories" do
    let!(:food) { Category.create!(name: "Food") }
    let!(:transport) { Category.create!(name: "Transport") }
    let!(:supplies) { Category.create!(name: "Supplies") }

    it "returns all categories" do
      get "/api/categories"

      expect(response).to have_http_status(:success)
      json = JSON.parse(response.body)
      expect(json.length).to eq(3)
      expect(json.map { |c| c["name"] }).to include("Food", "Transport", "Supplies")
    end

    it "returns categories in alphabetical order" do
      get "/api/categories"

      json = JSON.parse(response.body)
      expect(json.map { |c| c["name"] }).to eq([ "Food", "Supplies", "Transport" ])
    end
  end

  describe "POST /api/categories" do
    let!(:food) { Category.create!(name: "Food") }
    it "create new category" do
      new_category_params = {
        category: {
          name: "New"
        }
      }

      expect {
          post '/api/categories', params: new_category_params, as: :json
      }.to change(Category, :count).by(1)

      expect(response).to have_http_status(:created)
    end

    context "with invalid parameters" do
      it "with empty category name" do
        empty_category_name = {
          category: {
            name: ""
          }
        }

        expect {
            post '/api/categories', params: empty_category_name, as: :json
        }.to change(Category, :count).by(0)

        expect(response).to have_http_status(:unprocessable_entity)
      end

      it "with missing category name" do
        missing_category_name = {
          category: {
            other_field: ""
          }
        }

        expect {
            post '/api/categories', params: missing_category_name, as: :json
        }.to change(Category, :count).by(0)

        expect(response).to have_http_status(:unprocessable_entity)
      end

      it "with duplicate category" do
        duplicate_category_params = {
            category: {
              name: "Food"
            }
        }

        expect {
            post '/api/categories', params: duplicate_category_params, as: :json
        }.to change(Category, :count).by(0)

        expect(response).to have_http_status(:unprocessable_entity)
      end

      it "with case-insensitive duplicate category" do
          case_insensitive_duplicate_category_params = {
            category: {
              name: "fOOd"
            }
          }

        expect {
          post '/api/categories', params: case_insensitive_duplicate_category_params, as: :json
        }.to change(Category, :count).by(0)

        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end
end
