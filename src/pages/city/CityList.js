import React from "react";
import { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";
import CityService from "../../services/cityService";

export default function CityList() {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data));
  }, []);

  return (
    <div>
      <Table color="black" key="black">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Cities</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {cities.map((city) => (
            <Table.Row key={city.id}>
              <Table.Cell>{city.name}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
