module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      name: String,
      bDate: String,
      gender: String,
      email: String,
      cpf: String,
      startDate: String,
      team: String,
      published: Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Employee = mongoose.model("employee", schema);
  return Employee;
};
