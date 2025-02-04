import React from 'react';

const RequestDemo = () => {
    return (
        <div class="container">
            <div class="row">
              <div class="demo-form">
                <div class="demo-bg">
                  <div class="form-header">
                    <h2>Request a Demo / Callback</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas accusantium doloribus perferendis harum facere fuga ad voluptatem sunt tempora eius! Nobis, alias dolor eum suscipit amet repellat animi explicabo quae.</p>
                  </div>
                </div>
                <form>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <span class="form-label">First Name</span>
                        <input
                          class="form-control"
                          type="text"
                          required=""
                          placeholder="John"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <span class="form-label">Last Name</span>
                        <input
                          class="form-control"
                          type="text"
                          required=""
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <span class="form-label">Email Address</span>
                        <input
                          class="form-control"
                          type="email"
                          required=""
                          placeholder="john@doe.com"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <span class="form-label">Phone No</span>
                        <input
                          class="form-control"
                          type="phone"
                          required=""
                          placeholder="980-456-7890"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <span class="form-label">Model</span>
                    <select class="form-control" required="">
                      <option value="" selected="" hidden="">
                        Select model
                      </option>
                      <option value="1">Truck 1</option>
                      <option value="2">Truck 2</option>
                      <option value="3">Truck 3</option>
                      <option value="4">Truck 4</option>
                      <option value="5">Truck 5</option>
                    </select>
                  </div>
                  <div class="form-btn">
                    <button class="submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
    );
};

export default RequestDemo;