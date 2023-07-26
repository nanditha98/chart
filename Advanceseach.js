import React from "react";

function Advancesearch() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="https://www.google.com/search">
            <div class="top-bar">
              <h1>Advanced Search</h1>
              <div class="menu">
                <a href="index.html">G. Search</a>
                <a href="images.html">Image</a>
              </div>
            </div>

            <div class="main_div">
              <div class="column column1">
                <span class="first">Find pages with...</span>

                <div class="row">
                  <label for="first">all these words:</label>
                  <input type="text" id="first" name="as_q" />
                </div>
                <div class="row">
                  <label for="second">this exact word or phrase:</label>
                  <input type="text" id="second" name="as_epq" />
                </div>
                <div class="row">
                  <label for="third">any of these words:</label>
                  <input type="text" id="third" name="as_oq" />
                </div>
                <div class="row">
                  <label for="fourth">none of these words:</label>
                  <input type="text" id="fourth" name="as_eq" />
                </div>
                <button type="submit">Advanced Search</button>
              </div>

              <div class="column column2">
                <span class="first">To do this in the search box.</span>

                <div class="row">
                  <p>Type the important words: tri-colour rat terrier</p>
                </div>

                <div class="row">
                  <p>Put exact words in quotes: "rat terrier"</p>
                </div>

                <div class="row">
                  <p>
                    Type OR between all the words you want: miniature OR
                    standard
                  </p>
                </div>

                <div class="row">
                  <p>
                    Put a minus sign just before words that you don't want:
                    -rodent, -"Jack Russell"
                  </p>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Advancesearch;
