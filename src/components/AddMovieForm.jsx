import { useState } from 'react';
import { Link } from 'react-router-dom';

const AddMovieForm = () => {
  const [formData, setFormData] = useState({
    title: '', director: '', genre: '', releaseYear: '', synopsis: '', posterUrl: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).some(field => !field)) {
      setError('All fields are required');
      return;
    }
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-800 p-4">
      <div className="w-full max-w-5xl p-10 bg-white rounded-lg shadow-lg border border-gray-300">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Add New Movie</h2>
        {error && <p className="text-red-600 mb-4 text-center font-semibold">{error}</p>}
        <form onSubmit={handleSubmit} className="w-full">
          <table className="w-full border-collapse border border-gray-300">
            <tbody>
              {[['Title', 'title'], ['Director', 'director'], ['Release Year', 'releaseYear'], ['Poster URL', 'posterUrl']].map(([label, field]) => (
                <tr key={field} className="border">
                  <td className="p-4 border bg-gray-100 font-semibold">{label}</td>
                  <td className="p-4 border">
                    <input name={field} value={formData[field]} onChange={handleChange}
                      className="w-full p-2 border rounded-lg text-gray-900 text-lg" placeholder={`Enter ${label}`} required />
                  </td>
                </tr>
              ))}
              <tr className="border">
                <td className="p-4 border bg-gray-100 font-semibold">Genre</td>
                <td className="p-4 border">
                  <select name="genre" value={formData.genre} onChange={handleChange} className="w-full p-2 border rounded-lg text-gray-900 text-lg" required>
                    <option value="">Select a genre</option>
                    {['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Thriller', 'Documentary'].map(genre => (
                      <option key={genre} value={genre.toLowerCase()}>{genre}</option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr className="border">
                <td className="p-4 border bg-gray-100 font-semibold">Synopsis</td>
                <td className="p-4 border">
                  <textarea name="synopsis" value={formData.synopsis} onChange={handleChange}
                    className="w-full p-2 border rounded-lg text-gray-900 text-lg" placeholder="Enter movie synopsis" required />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex gap-6 mt-8">
            <button type="submit" className="flex-1 p-4 bg-blue-700 text-white rounded-lg text-xl font-semibold hover:bg-blue-800">Add Movie</button>
            <Link to='/' className="flex-1 p-4 bg-gray-400 text-black rounded-lg text-xl font-semibold text-center hover:bg-gray-500">Cancel</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovieForm;
