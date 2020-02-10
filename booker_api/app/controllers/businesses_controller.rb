class BusinessesController < ApplicationController
  def index
   @businesses = Business.all
   render :json => @businesses, :include => :address
  end

  def show
    @businesses = Business.find(params[:id] )
    render :json => @businesses, :include  => :employees
  end
end
