import styles from "./styles.module.css";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Prescription</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav> 
			<form >
      		<img src="medical.png" alt="Corner Image" class="corner-image"></img>
			<table>
      <tr>
        <td><label for="name">Name:</label></td>
        <td><input type="text" id="name" name="name" required></input></td>
      </tr>
      <tr>
        <td><label for="occupation">Occupation:</label></td>
        <td><input type="text" id="occupation" name="occupation" required></input></td>
      </tr>
      <tr>
        <td><label for="gender">Gender:</label></td>
        <td>
          <select id="gender" name="gender" required>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </td>
      </tr>
      <tr>
        <td><label for="medicine">Medicine:</label></td>
        <td>
          <select id="medicine" name="medicine" required>
            <option value="">Select</option>
            <option value="Medicine A">Medicine A</option>
            <option value="Medicine B">Medicine B</option>
            <option value="Medicine C">Medicine C</option>
          </select>
        </td>
      </tr>
      <tr>
        <td colspan="2"><input type="submit" value="Generate QR code"></input></td>
      </tr>
    </table>		
			
					
						
			</form>
				
		</div> 
	
					

		
	);
};

export default Main;