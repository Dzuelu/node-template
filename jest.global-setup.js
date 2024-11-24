module.exports = () => {
  process.env.TZ = 'UTC';

  console.log('\nJest environment setup!');
  console.log(`TZ set: ${process.env.TZ}`);
};
