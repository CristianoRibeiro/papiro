module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'papiro',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
